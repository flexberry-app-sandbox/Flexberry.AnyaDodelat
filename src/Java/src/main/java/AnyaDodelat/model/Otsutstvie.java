package AnyaDodelat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AnyaDodelat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Отсутствие
 */
@Entity(name = "IISAnyaDodelatОтсутствие")
@Table(schema = "public", name = "Отсутствие")
public class Otsutstvie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаКонца")
    private Date датаконца;

    @Column(name = "Причина")
    private String причина;

    @Column(name = "Комментарий")
    private String комментарий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "sotrudnik")
    @Convert("sotrudnik")
    @Column(name = "сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "sotrudnik", insertable = false, updatable = false)
    private sotrudnik sotrudnik;


    public Otsutstvie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаКонца() {
      return датаконца;
    }

    public void setДатаКонца(Date датаконца) {
      this.датаконца = датаконца;
    }

    public String getПричина() {
      return причина;
    }

    public void setПричина(String причина) {
      this.причина = причина;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }


}