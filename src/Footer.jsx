import style from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div className={style.footer}>
      @Desarrollado por Nataly Estupiñan.
      <a href={'https://github.com/Nataly1Estupinan'}>
      <div className={style.icon}>
        <FaGithub />
      </div>
      </a>
      
    </div>
  );
}
