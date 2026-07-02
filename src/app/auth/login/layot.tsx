
export default function AuthLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <div className="h-full bg-white">
		{children}
	  </div>
	);
  }
  