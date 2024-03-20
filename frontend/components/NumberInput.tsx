import { Text, Input, InputField, VStack, HStack } from '@gluestack-ui/themed';
import React from 'react';

export default function NumberInput({
	title,
	placeholder,
	unit,
}: {
	title: string;
	placeholder: string;
	unit: string;
}) {
	return (
		<VStack space='sm'>
			<Text textAlign='center' fontSize='$lg'>
				{title}
			</Text>
			<HStack
				display='flex'
				justifyContent='center'
				alignItems='center'
				space='lg'
			>
				<Input
					variant='outline'
					size='md'
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
					flex={1}
				>
					<InputField
						placeholder={placeholder}
						keyboardType='number-pad'
						textAlign='center'
					/>
				</Input>
				<Text>{unit}</Text>
			</HStack>
		</VStack>
	);
}
