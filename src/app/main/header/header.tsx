import SignInButton from "../../../../components/signinbutton";
import Drawer from "./drawer";
import Logophoto from "./../../../../public/logo/logo";
import CategoryMenu from "./drawer";

export default function Header() {
  return (
    <header className="py-8 bg-white justify-between   flex">
      <div className="flex gap-7 ">
        <Logophoto />
        <CategoryMenu />
      </div>
      <div>
        <SignInButton text='ورود به حساب' />
      </div>
    </header>
  );
}
