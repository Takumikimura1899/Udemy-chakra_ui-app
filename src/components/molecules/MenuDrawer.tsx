import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { VFC, memo } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo(
  ({ onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting }) => {
    return (
      <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
        {/* 後ろ暗くするみたいなやつ */}
        <DrawerOverlay>
          {/* 実際のコンテンツ */}
          <DrawerContent>
            <DrawerBody p={0} bg='gray.100'>
              <Button w='100%' onClick={onClickHome}>
                TOP
              </Button>
              <Button w='100%' onClick={onClickUserManagement}>
                ユーザー一覧
              </Button>
              <Button w='100%' onClick={onClickSetting}>
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
);
