import Link from "next/link";
import * as examStore from "@/stores/exam";
import { useReactiveVar } from "@apollo/client";

function APage() {
  const exam = useReactiveVar(examStore.examValue);

  return (
    <>
      <div>a 페이지 입니다.</div>
      <p>{exam}</p>
      <Link href="/bPage">b 페이지로 이동</Link>
    </>
  );
}

export default APage;
