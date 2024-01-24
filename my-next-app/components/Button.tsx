import React from "react";
import styles from "../styles/Home.module.css"

interface ButtonProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return <button className={styles.btn} onClick={onClick}>{children}</button>
}

export default Button;