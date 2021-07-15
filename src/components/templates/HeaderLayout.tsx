import { VFC, memo, ReactNode } from 'react';
import { Header } from '../pages/organisms/layout/Header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
