import { Button } from '@components/Button';

export default function Home() {
  return (
    <>
      <Button variant="fill" color="primary">
        fill, primary
      </Button>
      <Button variant="fill" color="secondary">
        fill, secondary
      </Button>
      <Button variant="fill" color="error">
        fill, error
      </Button>
      <Button variant="fill" color="warning">
        fill, warning
      </Button>
      <Button variant="outline" color="primary">
        outline, primary
      </Button>
      <Button variant="outline" color="secondary">
        outline, secondary
      </Button>
      <Button variant="outline" color="error">
        outline, error
      </Button>
      <Button variant="outline" color="warning">
        outline, warning
      </Button>
      <Button variant="text" color="primary">
        text, primary
      </Button>
      <Button variant="text" color="secondary">
        text, secondary
      </Button>
      <Button variant="text" color="error">
        text, error
      </Button>
      <Button variant="text" color="warning">
        text, warning
      </Button>
    </>
  );
}
