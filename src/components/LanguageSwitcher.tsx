import { IconLanguage } from '@tabler/icons-react';

interface Props {
  currentLang: string;
  currentPath: string;
}

export default function LanguageSwitcher({ currentLang, currentPath }: Props) {
  const otherLang = currentLang === 'es' ? 'en' : 'es';
  const otherLangLabel = currentLang === 'es' ? 'EN' : 'ES';

  // Remove language prefix from path if it exists
  const pathWithoutLang = currentPath.replace(/^\/(es|en)/, '') || '/';
  const newPath = otherLang === 'es' ? pathWithoutLang : `/${otherLang}${pathWithoutLang}`;

  return (
    <a
      href={newPath}
      className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch to ${otherLangLabel}`}
    >
      <IconLanguage size={20} className="text-gray-700 dark:text-gray-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{otherLangLabel}</span>
    </a>
  );
}
