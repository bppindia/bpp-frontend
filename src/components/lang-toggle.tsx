import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react"; // You can replace this with an appropriate icon if desired
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ghost">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("hi")}>
          Hindi (𑑑𑑕𑑗)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("bn")}>
          Bengali (𑄃𑄎)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("te")}>
          Telugu (తెలుగు)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("mr")}>
          Marathi (मराठी)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ta")}>
          Tamil (தமிழ்)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ur")}>
          Urdu (اردو)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("gu")}>
          Gujarati (ગુજરાતી)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ml")}>
          Malayalam (മലയാളം)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("kn")}>
          Kannada (ಕನ್ನಡ)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("pa")}>
          Punjabi (ਪੰਜਾਬੀ)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("as")}>
          Assamese (অসমীয়া)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("mai")}>
          Maithili (मैथिली)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("or")}>
          Odia (ଓଡ଼ିଆ)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("mni")}>
          Manipuri (মেইতেই)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("doi")}>
          Dogri (डोगरी)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ks")}>
          Kashmiri (کٕشمیری)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("sat")}>
          Santali (ᱥᱟᱱᱛᱟᱲᱤ)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ne")}>
          Nepali (नेपाली)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("sd")}>
          Sindhi (سنڌي)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
