## render-promise

利用 Promise 更好的管理对话类组件（Modal，Dialog，Drawer）

### 文档

#### 食用指南

**my-modal.tsx**

```tsx
import renderPromise from 'render-promise';
import { Modal } from 'antd';

import { getDetail } from './server';

interface DetailResponse {
  code: string;
  info: string[];
  msg: string;
}

// onOk 和 onClose 会在 renderPromise 里面带进来，不需要外面自己写
interface ModalProps {
  onOk: () => void;
  onClose: () => void;

  id: string; // 外层与modal通信的数据
}

const MyModal = (props) => {
  const { onOk, onClose, id } = pros;
  const [info, setInfo] = setState([]);

  const getDetail = useCallback(async () => {
    const result: DetailResponse = await getDetail({ id });
    if (result.code === '0') {
      setInfo(result?.info ?? []);
    }
  }, [id]);

  useEffect(() => {
    if (id) getDetail();
  }, [getDetail]);

  return (
    <Modal open={true} title='蒙面超人' onOk={() => onOk()} onCancel={() => onClose()}>
      <p>HEN SHIN!!!!!!</p>
    </Modal>
  );
};

//  第二个参数作为这个组件的 key
export const openMyModal = renderPromise(MyModal, 'my-modal');

export default MyModal;
```

**page.tsx**

```tsx
import { Button } from 'antd';
import { openMyModal } from './my-modal';

const Page = () => {
  return (
    <div>
      <Button
        onClick={() => {
          // 只给id就好
          openMyModal({ id })
            .then(() => {
              /*
              弹窗onOk之后
              可以做一些刷新页面数据的请求
              与modal内的业务解耦
            */
              refresh();
            })
            .catch(() => {
              /*
              弹窗onCancel之后
            */
            });
        }}
      >
        变身
      </Button>
    </div>
  );
};
```

#### 一些特性

**onOk**

```tsx
interface Rider {
  name: string;
}

interface ModalProps {
  // 在这里声明返回的类型
  onOk: (res: Rider) => void;
  onClose: () => void;
}

-----------------
  <Modal
    onOk={() => { onOk({name:'Black Sun'}) }}
  >
  </Modal>
-----------------

-----------------
  <Button
    onClick={() => {
      // 只给id就好
      openMyModal({ id })
        .then((rider) => {
          /*
            这里就能拿到modal返回来的数据，
            以及。。。有代码提示哈哈哈
          */
         console.log('rider.name: ', rider.name);
        })
        .catch(() => {
          /*
          弹窗onCancel之后
        */
        });
    }}
  >
    变身
  </Button>
-----------------




```

### 作者
