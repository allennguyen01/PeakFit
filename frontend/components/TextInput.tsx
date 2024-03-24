import {
	Textarea,
	TextareaInput,
	FormControl,
	FormControlLabel,
	FormControlLabelText,
	FormControlHelper,
	FormControlHelperText,
} from '@gluestack-ui/themed';
import React from 'react';

export default function NumberInput({
	title,
	example,
	onChangeText,
}: {
	title: string;
	example: string;
	onChangeText: (text: string) => void;
}) {
	return (
		<FormControl>
			<FormControlLabel>
				<FormControlLabelText fontSize='$lg' fontWeight='$normal'>
					{title}
				</FormControlLabelText>
			</FormControlLabel>
			<Textarea
				size='md'
				isReadOnly={false}
				isInvalid={false}
				isDisabled={false}
				w='$full'
				h={80}
			>
				<TextareaInput
					onChangeText={onChangeText}
					placeholder='Your text goes here...'
				/>
			</Textarea>
			<FormControlHelper>
				<FormControlHelperText>{example}</FormControlHelperText>
			</FormControlHelper>
		</FormControl>
	);
}
