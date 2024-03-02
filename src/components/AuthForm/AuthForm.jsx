import AuthInput from "../Inputs/AuthInput";

const AuthForm = () => {
  return (
    <div className="bg-primary animate-fade animate-once animate-duration-600 animate-ease-in-out animate-normal animate-fill-both">
      <div className="max-w-[1186px] max-h-[738px] heigthcalc mx-auto flex items-center align-center justify-around ">
        <form id="signup" className="min-w-[240px] flex flex-col gap-2 ">
          <p className="text-iconstext-hover font-semibold text-xl">register</p>
          <AuthInput placeholder="username" type="text" />
          <AuthInput placeholder="email" type="text" />
          <AuthInput placeholder="verify email" type="text" />
          <AuthInput placeholder="password" type="text" />
          <AuthInput placeholder="verify password" type="text" />
          <button className="px-2 bg-tertiary rounded-md py-1 text-iconstext font-bold">
            Sign up
          </button>
        </form>

        <form id="login" className="min-w-[240px] flex flex-col gap-2">
          <p className="text-iconstext-hover font-semibold text-xl">log in</p>
          <AuthInput placeholder="username" type="text" />
          <AuthInput placeholder="email" type="text" />
          <AuthInput placeholder="verify email" type="text" />
          <AuthInput placeholder="password" type="text" />
          <AuthInput placeholder="verify password" type="text" />
          <button className="px-2 bg-tertiary rounded-md py-1 text-iconstext font-bold">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
