import ProtectedLayout from '../layout.protected';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
