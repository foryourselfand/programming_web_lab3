package model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "points")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Point implements Cloneable, Serializable {
	@Id
	@Column(name = "id", nullable = false, unique = true)
	@SequenceGenerator(name = "PointsIdSeq", sequenceName = "points_id_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "PointsIdSeq")
	private Long id;
	
	@Column(name = "x", nullable = false)
	private Double x;
	
	@Column(name = "y", nullable = false)
	private Double y;
	
	@Column(name = "r", nullable = false)
	private Double r;
	
	@Column(name = "result", nullable = false)
	private Boolean result;
	
	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}
