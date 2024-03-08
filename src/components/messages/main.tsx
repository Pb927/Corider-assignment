import { Flex } from "@chakra-ui/react";
import SendBubble from "./sendBubble";
import ReceiveBubble from "./receiveBubble";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMessages } from "@/lib/hooks";

export default function () {
  const { messages, loadMessages } = useMessages();
  return (
    <Flex
      grow={1}
      direction="column-reverse"
      overflowY={"auto"}
      id="scrollableDiv"
      style={{ scrollbarWidth: "thin" }}
    >
      <InfiniteScroll
        dataLength={messages.length}
        next={loadMessages}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        inverse={true}
        hasMore={true}
        loader={<div style={{ display: "none" }}></div>}
        scrollableTarget="scrollableDiv"
        initialScrollY={0}
      >
        {messages.map((msg) => {
          if (msg.sender.self) {
            return <SendBubble message={msg.message} key={msg.id} />;
          }
          return (
            <ReceiveBubble
              message={msg.message}
              img={msg.sender.image}
              key={msg.id}
            />
          );
        })}
      </InfiniteScroll>
    </Flex>
  );
}
