type Props = {
  text: string
}

const SignInButton = ({ text }: Props) => {
  return (
    <button
      style={{ background: '#06D001' }}
      className="py-2 px-8 font-bold rounded-3xl text-white hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
};

export default SignInButton;
