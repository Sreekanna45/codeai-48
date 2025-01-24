import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username.length < 8) {
      toast.error("Username must be at least 8 characters long");
      return;
    }
    
    if (name.trim() === "") {
      toast.error("Please enter your name");
      return;
    }
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userLoggedIn", "true");
    
    navigate("/home");
    toast.success("Login successful!");
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
          <h2 className="text-3xl font-bold text-white">Login</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
              Username (min. 8 characters)
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-white bg-secondary/50 backdrop-blur-sm"
              placeholder="Enter username"
              required
            />
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-white bg-secondary/50 backdrop-blur-sm"
              placeholder="Enter your name"
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
          
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;