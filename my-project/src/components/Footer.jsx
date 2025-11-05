import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-6 text-center">
      <div className="flex justify-center gap-6 text-xl mb-2">
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-400">© {new Date().getFullYear()} Enzo Augusto</p>
    </footer>
  );
}
