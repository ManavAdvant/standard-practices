import ProtectedLayout from '../layout.protected';

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
