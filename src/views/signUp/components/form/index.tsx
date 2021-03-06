import useSignUpForm from "../../hooks/signUpform";
import useAuthOptions from "../../hooks/authOptions";

import { InputField, SwitchField, SelectField } from "../../../../components/fields";
import { PrimaryButton } from "../../../../components/buttons";

import { FormStyle } from "./style";

const SignUpForm = () => {
    const form = useSignUpForm();
    const options = useAuthOptions();

    return <FormStyle onSubmit={form.handlers.submit}>
        <InputField
            type={'text'}
            title={'Usuario'}
            value={form.values.username}
            onValue={form.handlers.setUsername}
            error={form.errors.username}
            className={'username'}
        />
        <InputField
            type={'password'}
            title={'Contrasena'}
            value={form.values.password}
            onValue={form.handlers.setPassword}
            error={form.errors.password}
            className={'password'}
        />
        <InputField
            type={'email'}
            title={'Email'}
            value={form.values.email}
            onValue={form.handlers.setEmail}
            error={form.errors.email}
            className={'email'}
        />
        <SwitchField
            placeholder={'Tienes Equipo?'}
            value={form.values.haveTeamID}
            onValue={form.handlers.setHaveTeamID}
            className={'haveTeamID'}
        />
        {
            form.values.haveTeamID && <InputField
                type={'text'}
                title={'ID del Equipo'}
                value={form.values.teamID}
                onValue={form.handlers.setTeamId}
                error={form.errors.teamID}
                className={'teamID'}
            />
        }
        <SelectField
            title={'Rol'}
            value={form.values.role}
            onValue={form.handlers.setRole}
            error={form.errors.role}
            className={'role'}
        >
            {
                options.loading ?
                    <option disabled>Cargando ...</option> :
                    <option disabled value={''}>Seleccione un Rol</option>
            }
            {
                options.data?.roles.map((value, index) => (
                    <option value={value} key={index}>{ value }</option>
                ))
            }
        </SelectField>
        <SelectField
            title={'Continente'}
            value={form.values.continent}
            onValue={form.handlers.setContinent}
            error={form.errors.continent}
            className={'continent'}
        >
            {
                options.loading ?
                    <option disabled>Cargando ...</option> :
                    <option disabled value={''}>Seleccione un Continente</option>
            }
            {
                options.data?.continents.map((value, index) => (
                    <option value={value} key={index}>{ value }</option>
                ))
            }
        </SelectField>
        <SelectField
            title={'Region'}
            value={form.values.region}
            onValue={form.handlers.setRegion}
            error={form.errors.region}
            className={'region'}
        >
            {
                options.loading ?
                    <option disabled>Cargando ...</option> :
                    <option disabled value={''}>Seleccione una Region</option>
            }
            {
                options.data?.regions.map((value, index) => (
                    <option value={value} key={index}>{ value }</option>
                ))
            }
        </SelectField>
        {
            form.errors.general && <label className={'error'}>
                { form.errors.general }
            </label>
        }
        <PrimaryButton type={'submit'} className={'buttonSubmit'}>
            { form.isSubmitting ? 'Registrando ...' : 'Registrar' }
        </PrimaryButton>
    </FormStyle>
}

export default SignUpForm;