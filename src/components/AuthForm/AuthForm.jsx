const AuthForm = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-[1186px] max-h-[738px] heigthcalc mx-auto flex items-center align-center justify-around ">
        <div id="signup" className="min-w-[240px] flex flex-col gap-2 ">
          <p className="text-iconstext-hover font-semibold text-xl">register</p>
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="username"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="email"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="verify email"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="password"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="verify password"
            type="text"
          />
          <button className="px-2 bg-tertiary rounded-md py-1 text-iconstext font-bold">
            Sign up
          </button>
        </div>
        <div id="login" className="min-w-[240px] flex flex-col gap-2">
          <p className="text-iconstext-hover font-semibold text-xl">log in</p>
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="email"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="password"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="verify email"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="password"
            type="text"
          />
          <input
            className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 "
            placeholder="verify password"
            type="text"
          />
          <button className="px-2 bg-tertiary rounded-md py-1 text-iconstext font-bold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
