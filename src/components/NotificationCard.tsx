type NotificationCardProps = {
  title: string
  message: string
}

function NotificationCard({ title, message }: NotificationCardProps) {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl">
        💬
      </div>
      <div>
        <div className="text-xl font-medium text-black dark:text-white">{title}</div>
        <p className="text-gray-500 dark:text-gray-400">{message}</p>
      </div>
    </div>
  )
}

export default NotificationCard