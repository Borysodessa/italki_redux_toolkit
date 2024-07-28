import "../App.css";
import styles from "../styles/app.module.css";

import json from "./data.json";
import { TeacherList } from "./teachersList";
import { TeacherContent } from "./teacherContent";
import { HeaderFilter } from "./headerFilter";

export function TeacherProfileLayout() {
  return (
    <div className={styles.appMainWrap}>
      <div>
        <HeaderFilter jsonData={json.data} />
      </div>
      <div className={styles.appCardWrap}>
        <div>
          <TeacherList jsonData={json.data} />
        </div>
        <div>
          <TeacherContent />
        </div>
      </div>
    </div>
  );
}
