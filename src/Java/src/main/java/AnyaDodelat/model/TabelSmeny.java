package AnyaDodelat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AnyaDodelat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТабельСмены
 */
@Entity(name = "IISAnyaDodelatТабельСмены")
@Table(schema = "public", name = "ТабельСмены")
public class TabelSmeny {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "НачалоСмены")
    private String началосмены;

    @Column(name = "КонецСмены")
    private String конецсмены;

    @Column(name = "типЗанятости")
    private String типзанятости;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "sotrudnik")
    @Convert("sotrudnik")
    @Column(name = "сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "sotrudnik", insertable = false, updatable = false)
    private sotrudnik sotrudnik;


    public TabelSmeny() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getНачалоСмены() {
      return началосмены;
    }

    public void setНачалоСмены(String началосмены) {
      this.началосмены = началосмены;
    }

    public String getКонецСмены() {
      return конецсмены;
    }

    public void setКонецСмены(String конецсмены) {
      this.конецсмены = конецсмены;
    }

    public String getтипЗанятости() {
      return типзанятости;
    }

    public void setтипЗанятости(String типзанятости) {
      this.типзанятости = типзанятости;
    }


}