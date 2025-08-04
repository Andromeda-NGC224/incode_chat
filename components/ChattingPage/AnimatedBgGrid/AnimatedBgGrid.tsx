export default function AnimatedBgGrid() {
  return (
    <div
      className="fixed inset-0 opacity-100 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FFFF' fill-opacity='0.03'%3E%3Cpath d='M0 0h100v1H0zM0 20h100v1H0zM0 40h100v1H0zM0 60h100v1H0zM0 80h100v1H0zM20 0v100h1V0zM40 0v100h1V0zM60 0v100h1V0zM80 0v100h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    ></div>
  );
}
