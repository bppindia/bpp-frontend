import { PanelNavigation } from "@/components/section";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AccountInfo = ({ defaultState, updateInfo }) => {
  const { register, handleSubmit } = useForm();

  const personal = defaultState.personal ?? {};

  return (
    <form onSubmit={handleSubmit(updateInfo)}>
      <div className="grid">
      <div className="mb-4">
          <Label htmlFor="name">Username</Label>
          <Input
            {...register("name", { required: true, value: personal.name })}
            className="my-1"
            type="text"
            id="name"
            placeholder=""
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">Password</Label>
          <Input
            {...register("name", { required: true, value: personal.name })}
            className="my-1"
            type="text"
            id="name"
            placeholder="password"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">Confirm Password</Label>
          <Input
            {...register("name", { required: true, value: personal.name })}
            className="my-1"
            type="text"
            id="name"
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="name">Pin</Label>
          <Input
            {...register("name", { required: true, value: personal.name })}
            className="my-1"
            type="text"
            id="name"
            placeholder=""
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Confirm Pin</Label>
          <Input
            type="email"
            id="email"
            placeholder=""
            {...register("email", { required: false, value: personal.email })}
          />
        </div>
      </div>
      <PanelNavigation panelCompletionStatus={0} />
    </form>
  );
};

export default AccountInfo;