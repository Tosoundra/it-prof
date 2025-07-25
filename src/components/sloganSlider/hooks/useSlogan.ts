import { useTranslations } from "@/config/i18n/i18n";

export const useSlogan = () => {
  const t = useTranslations();
  
  return [t.hero.slogan_1, t.hero.slogan_2, t.hero.slogan_3, t.hero.slogan_4, t.hero.slogan_5];
}