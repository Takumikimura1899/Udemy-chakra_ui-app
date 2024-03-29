import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { VFC, memo, useState, ChangeEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState('');

  // (e: ChangeEvent<HTMLInputElement>の型指定の仕方はそういうものだと覚える)
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading as='h1' size='lg' textAlign='center'>
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        {/* 囲んだ要素を等間隔に調整できる */}
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder='ユーザーID'
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ''}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
