import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { VFC, memo, useEffect, useCallback } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useSelectUser } from '../../hooks/useSelectUser';
import { UserCard } from './organisms/user/UserCard';
import { UserDetailModal } from './organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  // カスタムフックを呼び出して、必要なものを取り出す。
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  console.log(selectedUser);

  // 画面表示時にユーザー一覧を取得したいのでuseEffectを使用する
  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify='space-around'>
          {users.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard
                id={user.id}
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
