import { TranslateCategory } from "../../plugins/lang";

const ListServiceCategory = ({ items, obj, setData, data }) => {
  const translated = TranslateCategory(obj);

  return (
    <div className="w-100 d-flex justify-content-center">
      <ul className="mx-auto list-group list-group-flush">
        {items &&
          translated
            .filter((i) => (items || []).includes(i.slug))
            .map((i, key) => (
              <li key={key} className="list-group-item">
                <i
                  onClick={() =>
                    setData({
                      ...data,
                      service_category: [...items].filter(
                        (item) => item != i.slug
                      ),
                    })
                  }
                  className="btn mx-2 bi bi-x"
                ></i>
                {i.title}
              </li>
            ))}
      </ul>
    </div>
  );
};
export default ListServiceCategory;
