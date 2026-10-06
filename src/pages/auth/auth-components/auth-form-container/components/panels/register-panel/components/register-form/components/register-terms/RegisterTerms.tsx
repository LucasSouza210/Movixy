import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

import TermsCheckbox from "./components/TermsCheckbox"
import TermsAgreements from "./components/TermsAgreements"
import FormFieldError from "../../../../../../../../../../../components/ui/form/form-field/components/FormFieldError"

interface TermsCheckboxProps {
    checked: boolean
    onToggle: () => void
    error?: FieldError
    registration: UseFormRegisterReturn
}

export default function RegisterTerms({ checked, onToggle, error, registration }: TermsCheckboxProps) {
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <div className="w-full flex items-center gap-1.75 sm:rounded-2 md:gap-2.25 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
                <TermsCheckbox checked={checked} toggle={onToggle} />
                <TermsAgreements />
                <input type="checkbox" className="hidden" {...registration} />
            </div>
            {
                error &&
                <FormFieldError error={error} />
            }
        </div>
    )
}