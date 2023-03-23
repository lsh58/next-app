import Link from "next/link";
import * as examStore from "@/stores/exam";
import { useReactiveVar } from "@apollo/client";

function BPage() {
  const exam = useReactiveVar(examStore.examValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    examStore.setValue(e.target.value);
  };

  return (
    <>
      <div>b 페이지 입니다.</div>
      <input type="text" placeholder="검색" onChange={onChange} value={exam} />
      <p>{exam}</p>
      <Link href="/aPage">a 페이지로 이동</Link>
    </>
  );
}

export default BPage;
