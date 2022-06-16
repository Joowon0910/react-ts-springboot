package project.intermediary.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "boardtitle_tbl")
public class Member {
    @Id
    @GeneratedValue
    private int id;
    private String userID;
    private String password;
    private String email;
    private String platform;
    private String nickname;

}
