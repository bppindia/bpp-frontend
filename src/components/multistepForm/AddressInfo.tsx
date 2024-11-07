import { PanelNavigation } from "@/components/section";
import { Input } from "@/components/ui/input"; // Assuming this is the Input component from your UI library
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from '@/data/language';
import { state } from '@/data/states';
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddressInfo = ({ defaultState, updateInfo }) => {
  const { register, handleSubmit } = useForm();
  const [hasReferral, setHasReferral] = useState(false); // State to track checkbox

  const personal = defaultState.memInfo ?? {};

  return (
    <form onSubmit={handleSubmit(updateInfo)}>
      <div className="mb-4">
          <Label htmlFor="phone">address Line 1</Label>
          <Input
            type="tele"
            id="text"
            placeholder=""
            {...register("phone", { required: true, value: personal.phone })}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">address Line 2</Label>
          <Input
            type="tele"
            id="text"
            placeholder=""
            {...register("phone", { required: true, value: personal.phone })}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">City</Label>
          <Input
            type="tele"
            id="text"
            placeholder=""
            {...register("phone", { required: true, value: personal.phone })}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">State</Label>
          <Input
            type="tele"
            id="text"
            placeholder=""
            {...register("phone", { required: true, value: personal.phone })}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">Zipcode</Label>
          <Input
            type="tele"
            id="text"
            placeholder=""
            {...register("phone", { required: true, value: personal.phone })}
          />
        </div>
      <PanelNavigation panelCompletionStatus={0} />
    </form>
  );
};

export default AddressInfo;
