import {useForm} from "react-hook-form";

const Form = (props) => {
    const {valueSubmit} = props
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => valueSubmit(JSON.stringify(data));
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" name="email" id="email"/>

            <label htmlFor="pass">Mot de passe</label>
            <input {...register("pass")} type="password" name="pass" id="pass"/>

            <label htmlFor="pass-verif">Verification mot de passe</label>
            <input {...register("passVerif")} type="password" name="passVerif" id="pass-verif"/>

            <label htmlFor="firstname">Prénom</label>
            <input {...register("firstname")} type="text" name="firstname" id="firstname"/>

            <label htmlFor="lastname">Prénom</label>
            <input {...register("lastname")} type="text" name="lastname" id="lastname"/>
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" value="Soumettre"/>
        </form>
);
}

export default Form;