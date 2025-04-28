import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}

const StyledButton = styled(motion.button)<{ variant: string }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  ${({ variant }) =>
    variant === "primary" &&
    `
      background-color: var(--color-primary);
      color: white;
    `}
  ${({ variant }) =>
    variant === "secondary" &&
    `
      background-color: var(--color-secondary);
      color: white;
    `}
  ${({ variant }) =>
    variant === "accent" &&
    `
      background-color: var(--color-accent);
      color: #333;
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
}) => (
  <StyledButton
    variant={variant}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "tween", duration: 0.18, ease: "easeInOut" }}
  >
    {children}
  </StyledButton>
);
