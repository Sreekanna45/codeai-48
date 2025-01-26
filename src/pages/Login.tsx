import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message === "Invalid login credentials") {
          toast.error("Invalid email or password. Please try again or sign up if you don't have an account.");
        } else {
          toast.error(error.message);
        }
        return;
      }

      if (data.user) {
        // Store login state and user info
        localStorage.setItem("userLoggedIn", "true");
        localStorage.setItem("userName", email.split('@')[0]); // Using email prefix as username

        toast.success("Login successful!");
        navigate("/home"); // Redirect to home page
      }
    } catch (error: any) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      toast.success("Password reset email sent! Please check your inbox.");
      setIsResetMode(false);
    } catch (error: any) {
      toast.error(error.message);
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
          <h2 className="text-3xl font-bold text-white">
            {isResetMode ? "Reset Password" : "Login"}
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            {isResetMode 
              ? "Enter your email to receive a reset link" 
              : "Don't have an account yet? "}
            {!isResetMode && (
              <button
                onClick={() => navigate("/signup")}
                className="text-primary hover:underline font-medium"
              >
                Sign up here
              </button>
            )}
          </p>
        </div>
        
        <form onSubmit={isResetMode ? handleResetPassword : handleLogin} className="space-y-6">
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
          
          {!isResetMode && (
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
          )}
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading 
              ? (isResetMode ? "Sending..." : "Logging in...") 
              : (isResetMode ? "Send Reset Link" : "Login")}
          </Button>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setIsResetMode(!isResetMode)}
              className="text-primary hover:underline text-sm"
            >
              {isResetMode ? "Back to Login" : "Forgot Password?"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-primary hover:underline text-sm"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;