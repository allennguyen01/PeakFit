import {
	VStack,
	ScrollView,
	Button,
	ButtonText,
	Image,
	Pressable,
	Text,
	HStack,
	Modal,
	ModalBackdrop,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Heading,
	ModalCloseButton,
	Icon,
	CloseIcon,
} from '@gluestack-ui/themed';
import { useState, useRef } from 'react';
import { storeData, getData } from '@/functions/AsyncStorage';

export default function PersonaButton({
	description,
	imageURL,
}: // stats,
// body,
{
	description: string;
	imageURL: string;
	// stats: Object;
	// body: string;
}) {
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);

	return (
		<>
			<Pressable
				onPress={() => setShowModal(true)}
				ref={ref}
				height={200}
				width={80}
				borderColor='black'
				borderWidth={2}
				borderRadius={10}
				alignItems='center'
				justifyContent='center'
				gap={5}
				paddingTop={5}
			>
				<Image
					source={{
						uri: imageURL,
					}}
					alt={description}
					width='80%'
					height='80%'
				/>
				<Text size='xs' lineHeight='$xs'>
					{description}
				</Text>
			</Pressable>
			<Modal
				isOpen={showModal}
				onClose={() => {
					setShowModal(false);
				}}
				finalFocusRef={ref}
			>
				<ModalBackdrop />
				<ModalContent>
					<ModalHeader>
						<Heading size='lg'>Persona: {description}</Heading>
						<ModalCloseButton>
							<Icon as={CloseIcon} />
						</ModalCloseButton>
					</ModalHeader>
					<ModalBody>
						<Text>body</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							variant='outline'
							size='sm'
							action='secondary'
							mr='$3'
							onPress={() => {
								setShowModal(false);
							}}
						>
							<ButtonText>Cancel</ButtonText>
						</Button>
						<Button
							size='sm'
							action='positive'
							borderWidth='$0'
							onPress={() => {
								setShowModal(false);
								storeData('person', { stat });
							}}
						>
							<ButtonText>Choose</ButtonText>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
