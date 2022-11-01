import { FC, PropsWithChildren } from "react";

interface HomeProps {
  className: string;
}

const Container: FC<PropsWithChildren<HomeProps>> = ({
  className,
  children,
}) => {
  return <main className={className ?? ""}>{children}</main>;
};

export default Container;
