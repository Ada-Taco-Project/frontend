import Header from "../components/Header"
import './SignUpPage.css'

const SignUpPage = () => {
  return (
    <div className="SignUpPage">
      <Header />
    <div class="signUp-box">
    <h4>회원가입</h4>
    <form>
      <input type="text" placeholder="*닉네임(최대 12자)" />
      <input type="text" placeholder="*아이디(최대 10자)" />
      <input type="password" placeholder="*비밀번호(특수문자 사용, 최대 16자)" />
      <input type="password" placeholder="*비밀번호 재확인" />
      <input type="email" placeholder="*이메일" />
      <input type="text" placeholder="인증번호" />
      <input type="text" placeholder="github 닉네임/링크 (선택사항)" />
      <button type="submit">회원가입</button>
    </form>
    </div>
    </div>
  )
}

export default SignUpPage