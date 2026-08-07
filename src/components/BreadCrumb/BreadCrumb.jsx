import Link from "next/link";

const BreadCrumb = ({title}) => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="container breadcrumbErapper ">
        <ol className="breadcrumb gap-2">
          <li className="breadcrumb-item">
            <Link href="/educationalPrograms">Aalam Bibi Education Program </Link>
          </li>
          <li className="breadcrumb-item active p-0" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default BreadCrumb