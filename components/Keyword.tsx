type Props = {
  title: string;
};

export default function Keyword(props: Props) {
  return (
    <div className="inline-flex items-center space-x-2 rounded-full bg-slate-400/10 px-3 py-1 text-sm">
      {props.title}
    </div>
  );
}
