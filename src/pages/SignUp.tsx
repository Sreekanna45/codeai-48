import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastAttempt, setLastAttempt] = useState(0);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !username || !password || !confirmPassword) {
      toast.error("All fields are required");
      return false;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (username.length < 3) {
      toast.error("Username must be at least 3 characters long");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Check if enough time has passed since last attempt
    const now = Date.now();
    if (now - lastAttempt < 4000) {
      toast.error("Please wait a few seconds before trying again");
      return;
    }

    setLoading(true);
    setLastAttempt(now);
    
    try {
      console.log("Starting signup process...");
      
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
          emailRedirectTo: window.location.origin + '/login',
        },
      });

      console.log("Signup response:", { signUpData, signUpError });

      if (signUpError) {
        if (signUpError.message.includes("rate limit")) {
          toast.error("Please wait a few seconds before trying again");
        } else {
          throw signUpError;
        }
        return;
      }

      if (signUpData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: signUpData.user.id,
              username,
              email,
            }
          ]);

        if (profileError) {
          console.error("Profile creation error:", profileError);
          throw profileError;
        }

        toast.success("Sign up successful! Please check your email to verify your account.");
        navigate("/login");
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      if (error.message.includes("rate limit")) {
        toast.error("Please wait a few seconds before trying again");
      } else {
        toast.error(error.message || "An error occurred during signup. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-background flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')`,
      }}
    >
      <div className="w-full max-w-md space-y-8 p-8 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Sign Up</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-white bg-secondary/50 backdrop-blur-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-white bg-secondary/50 backdrop-blur-sm"
              placeholder="Choose a username"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-white bg-secondary/50 backdrop-blur-sm"
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full text-white bg-secondary/50 backdrop-blur-sm"
              placeholder="Confirm password"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </Button>

          <p className="text-center text-white">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-primary hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;