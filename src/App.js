import "./App.css";
import { useForm } from "react-hook-form";
import { Button, Card, Form } from "react-bootstrap";

function makeText(inputText) {
  let text = "#前提 \r\n";
  text += inputText.questionGenre
    ? `##質問のジャンル \n${inputText.questionGenre}\n`
    : "";
  text += inputText.questionDeadline
    ? `##期限日 \n${inputText.questionDeadline}\n`
    : "";
  text += inputText.questionersLevel
    ? `##質問者の技量 \n${inputText.questionersLevel}\n`
    : "";
  text += inputText.digression
    ? `##余談の可否 \n${inputText.digression}\n`
    : "";
  text += "#基本事項 \n";
  text += inputText.questionContent
    ? `##質問内容 \n${inputText.questionContent}\n`
    : "";
  text += inputText.questionPurpose
    ? `##質問者の目的 \n${inputText.questionPurpose}\n`
    : "";
  text += inputText.questionersEnv
    ? `##質問者の開発環境 \n${inputText.questionersEnv}\n`
    : "";
  text += inputText.questionersCurrentStatus
    ? `##どこまで作成したか \n${inputText.questionersCurrentStatus}\n`
    : "";
  text += "#詳細 \n";
  text += inputText.questionDetail
    ? `##問題点 \n${inputText.questionDetail}\n`
    : "";
  text += inputText.questionGoal
    ? `##想定する動作 \n${inputText.questionGoal}\n`
    : "";
  text += inputText.questionCode
    ? `##コード \n\`\`\`\n${inputText.questionCode}\n\`\`\`\n`
    : "";
  text += inputText.questionError
    ? `##エラー \n${inputText.questionError}\n`
    : "";
  return text;
}

function App() {
  const { register, watch, reset } = useForm({});
  const generateText = () => {
    const text = makeText(inputText);
    reset({ result: text });
  };
  let inputText = {
    questionGenre: watch("questionGenre"),
    questionDeadline: watch("questionDeadline"),
    questionersLevel: watch("questionersLevel"),
    digression: watch("digression"),
    questionContent: watch("questionContent"),
    questionPurpose: watch("questionPurpose"),
    questionersEnv: watch("questionersEnv"),
    questionersCurrentStatus: watch("questionersCurrentStatus"),
    questionDetail: watch("questionDetail"),
    questionGoal: watch("questionGoal"),
    questionCode: watch("questionCode"),
    questionError: watch("questionError"),
  };
  return (
    <div className="container">
      <Card>
        <Card.Header as="h1">Programming-Question</Card.Header>
        <Card.Body>
          <Card.Title>プログラミング質問ガイドライン</Card.Title>
          <Card.Text>
            <Card.Link href="https://github.com/Nyanyan">Nyanyanさん</Card.Link>
            が作成された
            <Card.Link hraf="https://github.com/Nyanyan/Programming_Question">
              プログラミング質問ガイドライン
            </Card.Link>
            を参考に、フォームに入力された内容からマークダウン形式の質問文を生成します。
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-5 mb-3">
        <Card.Header as="h5">前提を伝える</Card.Header>
        <Card.Body>
          <Card.Text>
            立ち向かっている問題について伝える前に、まずはご自身の状況について軽く教えてください。
          </Card.Text>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="my-3">
          <Form.Label>何に関連する質問ですか?</Form.Label>
          <Form.Control type="text" {...register("questionGenre")} />
          <Form.Text className="text-muted">例: 課題/研究/趣味</Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>期限はいつですか?</Form.Label>
          <Form.Control type="date" {...register("questionDeadline")} />
          <Form.Text className="text-muted">
            期限があれば入力してください
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>ご自身の技量は?</Form.Label>
          <Form.Control type="text" {...register("questionersLevel")} />
          <Form.Text className="text-muted">
            例: 完全初心者/授業で触った程度/ガンガン書きます
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>余談は許しますか?</Form.Label>
          <Form.Control type="text" {...register("digression")} />
          <Form.Text className="text-muted">
            例: 予断歓迎/問題解決だけ
          </Form.Text>
        </Form.Group>
      </Form>
      <Card className="mt-5 mb-3">
        <Card.Header as="h5">基本事項を伝える</Card.Header>
        <Card.Body>
          <Card.Text>
            いくらプログラミングが得意な人でも、いきなりコードを見せられては何もわかりません。何をしたくてどんなコードを書いているのかを伝えましょう。
          </Card.Text>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="my-3">
          <Form.Label>どんな内容の質問ですか?</Form.Label>
          <Form.Control as="textarea" {...register("questionContent")} />
          <Form.Text className="text-muted">
            例: 書いたコードにエラーが出る / 環境構築で躓いている /
            やりたいことはあるが技術選定ができない
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>何を作りたいですか?</Form.Label>
          <Form.Control as="textarea" {...register("questionPurpose")} />
          <Form.Text className="text-muted">
            例: 〇〇を✕✕するアルゴリズムを実装したい /
            〇〇をするスマホアプリを作りたい
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>OS・言語・フレームワークは?</Form.Label>
          <Form.Control as="textarea" {...register("questionersEnv")} />
          <Form.Text className="text-muted">
            例: Windows11 / C++ / Flutter
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>どこまで作ってみましたか?</Form.Label>
          <Form.Control
            as="textarea"
            {...register("questionersCurrentStatus")}
          />
          <Form.Text className="text-muted">
            例: 愚直に書いてみた / プロトタイプを作ってみた /
            がむしゃらに書いてみた
          </Form.Text>
        </Form.Group>
      </Form>
      <Card className="mt-5 mb-3">
        <Card.Header as="h5">詳細を伝える</Card.Header>
        <Card.Body>
          <Card.Text>
            ここでやっと本題です。コードやエラーを見せましょう。問題解決に向けて、一番大事なところです。
          </Card.Text>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="my-3">
          <Form.Label>問題はなんですか?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("questionDetail")}
          />
          <Form.Text className="text-muted">
            例: エラーが出る / バグがある / 動くが遅い
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>想定する動きはなんですか?</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("questionGoal")} />
          <Form.Text className="text-muted">
            例: Xという入力に対してYと出力してほしい
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>該当コードを貼ってください</Form.Label>
          <Form.Control as="textarea" rows={7} {...register("questionCode")} />
          <Form.Text className="text-muted">
            例: コードをコピペ / コードを公開したGitHubレポジトリのリンク
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>実行結果を貼ってください</Form.Label>
          <Form.Control as="textarea" rows={7} {...register("questionError")} />
          <Form.Text className="text-muted">
            例: エラー文 / 間違った出力
          </Form.Text>
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={() => generateText()}>
        テキストを生成する
      </Button>

      <Form className="my-3">
        <Form.Control
          className="text-break"
          as="textarea"
          rows={20}
          {...register("result")}
        ></Form.Control>
      </Form>
    </div>
  );
}

export default App;
