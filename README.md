# fastcampusReact

#23.11.02
setting
npx create-next-app ./
V Would you like to use typescript ? no
V Would you like to use ESLint? - yes
V Would you like to use tailwind css? - no
V Would you like to use `src/` directory? - yes
V Would you like to use App Router? (reccmmended) - yes
V Would you like to customize the default import alias - yes
V What import alias would you like configured? - @/*
npm run dev

[프로젝트 폴더]
assets : 정적 파일들 
components : 공통적으로 사용될 아이들
firebase : firebase와 관련된 서비스
hooks : 커스텀 훅들 
layouts : 헤더, 메뉴 등등 
redux : 리덕스 파일들 
utils : util 함수들 만들어서 어떤 컴포넌트에서든 사용할 수 있게끔.
env : 환경변수

(auth), (checkout), (home), (order) : 이렇게 작성을 하게 될 경우 그룹핑이 가능하다. 
ex> localhost:3000/order-history 라는 경로를 가지게 된다. order라는게 필요가 없다.

[issue]
1. Could not create a project called "fastcampusReact" because of npm naming restrictions:
* name can no longer contain capital letters
2. rafce 스니펫 사용시 "[NextJS] Parsing error: Cannot find module 'next/babel'" 에러
문제는 ES7+ React/Redux/React-Native snippets 스니펫을 안깔아서 문제였던 것. 
이전에 깔았었던 것 같은데 왜 갑자기 사라졌을까..? ㅠ



#23.11.03
