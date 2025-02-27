import { SelectProvider } from "@/context/SelectContext";

export default function ProjectsLayout({
  children,
  modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode
}>) {
  return (
    <main>
      <SelectProvider>
        {children}
      </SelectProvider>
      {modal}
    </main>
  );
}