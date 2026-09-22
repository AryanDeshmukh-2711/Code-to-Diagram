import { ChatSession } from "@/components/chat/ChatSession";

export const metadata = {
  title: "Chat — Code to Diagram",
};

export default async function ProjectChatPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return <ChatSession projectId={projectId} />;
}
