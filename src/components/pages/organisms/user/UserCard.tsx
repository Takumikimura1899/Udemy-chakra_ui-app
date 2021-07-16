import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { VFC, memo } from 'react';

// 動的に変わるものをPropsとして受け取るのでその型を定義する
type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo(
  ({ id, imageUrl, userName, fullName, onClick }: Props) => {
    return (
      <Box
        w='260px'
        h='260px'
        bg='white'
        borderRadius='10px'
        shadow='md'
        p={4}
        _hover={{ cursor: 'pointer', opacity: 0.8 }}
        onClick={() => onClick(id)}
      >
        <Stack textAlign='center'>
          <Image
            borderRadius='full'
            boxSize='160px'
            src={imageUrl}
            alt={userName}
            m='auto'
          />
          <Text fontSize='lg' fontWeight='bold'>
            {userName}
          </Text>
          <Text fontSize='sm' color='gray'>
            {fullName}
          </Text>
        </Stack>
      </Box>
    );
  }
);
