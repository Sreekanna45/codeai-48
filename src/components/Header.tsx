import { Menu, LogOut, Home, Book, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  greeting: string;
  onHomeClick: () => void;
  onNotesToggle: () => void;
  onScannerToggle: () => void;
}

export const Header = ({ greeting, onHomeClick, onNotesToggle, onScannerToggle }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center mb-12">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onHomeClick}
          className="hover:bg-secondary rounded-lg transition-colors"
        >
          <Home className="h-6 w-6 text-primary" />
        </Button>
        <h2 className="text-xl font-semibold text-white">{greeting}</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onNotesToggle}
          className="hover:bg-secondary rounded-lg transition-colors"
        >
          <Book className="h-6 w-6 text-primary" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onScannerToggle}
          className="hover:bg-secondary rounded-lg transition-colors"
        >
          <FileText className="h-6 w-6 text-primary" />
        </Button>
        <h1 className="text-4xl font-bold text-white">code AI</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleLogout} className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};