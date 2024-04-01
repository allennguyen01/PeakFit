import {
	Checkbox,
	CheckboxIndicator,
	CheckboxIcon,
	CheckIcon,
} from '@gluestack-ui/themed';

export default function CompletionCheckbox() {
	return (
		<Checkbox
			size='md'
			isInvalid={false}
			isDisabled={false}
			value={'not completed'}
			aria-label='completion-checkbox'
		>
			<CheckboxIndicator>
				<CheckboxIcon as={CheckIcon} />
			</CheckboxIndicator>
		</Checkbox>
	);
}
