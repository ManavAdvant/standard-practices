import ProtectedLayout from '../layout.protected';

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
